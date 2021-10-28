export const handle = async (event) => {

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Hello sererless"
    }),
    headers: {
      "Content-Type": "application/json",
    }
  }
}