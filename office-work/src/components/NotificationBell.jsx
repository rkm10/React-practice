import React, { useState, useEffect } from 'react';
import { Badge, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationBell = () => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        // Fetch notifications from an API or use dummy data
        const fetchNotifications = async () => {
            const newNotifications = await fetch('/api/notifications').then(res => res.json());

            // Update state
            setNotifications(newNotifications);
            setUnreadCount(newNotifications.filter(notification => !notification.read).length);
        };

        fetchNotifications();
    }, []);

    const handleNotificationClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleNotificationClick} color="inherit">
                <Badge badgeContent={unreadCount} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {notifications.length === 0 ? (
                    <MenuItem onClick={handleMenuClose}>No new notifications</MenuItem>
                ) : (
                    notifications.map((notification, index) => (
                        <MenuItem key={index} onClick={handleMenuClose}>
                            <Typography>{notification.message}</Typography>
                        </MenuItem>
                    ))
                )}
            </Menu>
        </div>
    );
};

export default NotificationBell;
