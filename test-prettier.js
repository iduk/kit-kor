const test = {
  name: "test",
  value: 123,
  array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    deep: "value",
  },
}

const longString =
  "this is a very long string that should exceed 100 characters to test line wrapping behavior in the formatter configuration"

function testFunction(param1, param2, param3) {
  return param1 + param2 + param3
}

const arrowFunction = (a, b) => a + b

const Component = ({ prop1, prop2, prop3 }) => {
  return <div className="test">Hello World</div>
}
