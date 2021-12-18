expect.extend({
  anArrayOfSize(received, expected) {
    const pass = Array.isArray(received) && received.length === expected;
    const receivedStringify = JSON.stringify(received, null, 2);
    const message = () =>
      pass
        ? ""
        : `Received ${receivedStringify} is not an array with number of items ${expected}`;

    return {
      message,
      pass,
    };
  },
});

/* Usage:

it("Custom Matcher", () => {
  expect(["a"]).anArrayOfSize(1);
});

*/
