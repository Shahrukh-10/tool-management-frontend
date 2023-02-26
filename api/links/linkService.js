const url = "https://tool-mamagement-backend-production.up.railway.app/link/";
export const getAllLinks = async () => {
  try {
    const req = await fetch(url + "getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("comm lost " + error);
  }
};

export const getUserLinks = async (user) => {
  try {
    const {id} = await user;
    const req = await fetch(url + "getUserLinks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({id}),
    });
    const res = await req.json();
    console.log({user});
    console.log({res});
    return res;
  } catch (error) {
    console.log({ error });
  }
};


export const incrementRating = async (linkdata) => {
  try {
    const req = await fetch(url + "incrementRating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body:JSON.stringify(linkdata)
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log({ error });
  }
};

export const decrementRating = async (linkdata) => {
  try {
    const req = await fetch(url + "decrementRating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body:JSON.stringify(linkdata)
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log({ error });
  }
};

export const addLink = async (linkdata) => {
  try {
    const req = await fetch(url + "addLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body:JSON.stringify(linkdata)
    });
    const res = await req.json();
    console.log(res);
    return res;
  } catch (error) {
    console.log({ error });
  }
};

export const searchLink = async (data) => {
  try {
    const req = await fetch(url + "query/"+data, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res = await req.json();
    console.log(res,req);
    return res;
  } catch (error) {
    console.log({ error });
  }
};