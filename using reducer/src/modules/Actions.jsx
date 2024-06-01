export function deposit(amount) {
      return { type: "acc/deposit", payload: amount };
}

export function withdraw(amount) {
      return { type: "withdraw", payload: amount };
}

export function userName(name) {
      return { type: "nameUpdate", payload: name };
}

export function mobile(mobile) {
      return { type: "mobileUpdate", payload: mobile };
}

