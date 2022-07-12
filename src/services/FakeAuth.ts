interface authParams {
  name: string;
  password: string;
}

export const fakeAuth = ({ name, password }: authParams) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (name === "acorda" && password === "pedrinho") {
        let token = null;
        if (!localStorage.getItem("token")) {
          token = "2342f2f1d131rf12";
          localStorage.setItem("token", token);
        } else token = localStorage.getItem("token");
        if (token) resolve(token);
      } else reject(new Error("User not found!!"));
    }, 250);
  });
};
