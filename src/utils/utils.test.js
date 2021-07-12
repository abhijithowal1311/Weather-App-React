import utils from "./utils";

/* utils testing */

//validate email
test("validate email should give error", () => {
  expect(
    utils.validateUserForm("xyz", undefined, { dsa: "dsa" })
  ).toStrictEqual({
    errorPresent: "Please Enter a valid Email Address",
    errors: { email: "Please Enter a valid Email Address" },
  });
});

test("validate email should not give error", () => {
  expect(
    utils.validateUserForm("xyz", "dsdsa@gmail.com", { dsa: "dsa" })
  ).toStrictEqual({ errorPresent: "", errors: { email: "" } });
});

//graph filter
test("validate email should not give error", () => {
  expect(
    utils.validateUserForm("xyz", "dsdsa@gmail.com", { dsa: "dsa" })
  ).toStrictEqual({ errorPresent: "", errors: { email: "" } });
});
