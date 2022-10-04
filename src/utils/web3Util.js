export const truncate = (data) => {
  if (typeof data === "string") {
    const match = data?.match(
      /^(0x[a-zA-Z0-9]{5})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/
    );

    return `${match[1]}...${match[2]}`;
  }

  return data;
};
