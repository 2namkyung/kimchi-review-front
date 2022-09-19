import axios from "axios";
import { prepare, request } from "klip-sdk";

export function checkDevice() {
  const device = navigator.userAgent.toLowerCase();

  if (device.indexOf("android") > -1) {
    return "antroid";
  }

  if (device.indexOf("iphone") > -1) {
    return "ios";
  }

  return "pc";
}

export async function klipQrCode() {
  const response = await axios.post(
    "https://a2a-api.klipwallet.com/v2/a2a/prepare",
    {
      bapp: {
        name: "KIMCHI REVIEW",
      },
      type: "auth",
    }
  );

  const requestKey = response.data.request_key;
  return {
    qrcode: `https://klipwallet.com/?target=/a2a?request_key=${requestKey}`,
    requestKey,
  };
}

export async function klipMobileAuth() {
  const bapp = {
    bappName: "KIMCHI REVIEW",
  };

  const response = await prepare.auth(bapp);
  if (response.err) {
    return false;
  }

  request(response.request_key);
  return response.request_key;
}

export async function getKlipAddress(requestKey) {
  const response = await axios.get(
    `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${requestKey}`
  );

  return response.data.result.klaytn_address;
}
