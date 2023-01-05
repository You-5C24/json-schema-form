import Ajv from "ajv"

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      // minLength: 10,
    },
    age: {
      type: "number",
    },
    pets: {
      type: "array",
      items: {
        type: "string",
      },
    },
    isWorker: {
      type: "boolean",
    },
  },
  required: ["name", "age"],
}

const ajv = new Ajv()
const validate = ajv.compile(schema)
const data = {
  name: "5C24",
  age: 18,
  pets: ["pets1", "18"],
  isWorker: true,
}
const valid = validate(data)
if (!valid) {
  console.log(validate.errors)
}
