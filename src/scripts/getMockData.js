const RESPONSE = {
  success: {
    status: "success",
    output: "Hello, world!\n",
  },
  failure: {
    status: "error",
    error: "SyntaxError: Unexpected token",
  },
};

export async function runCode(payload) {
  console.log("payload:", payload);
  return Math.random() > 0.5 ? RESPONSE.success : RESPONSE.failure;
}
