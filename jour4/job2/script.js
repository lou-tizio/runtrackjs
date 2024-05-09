function jsonValueKey(jsonString, key) {
  const data = JSON.parse(jsonString);
  if (key in data) {
    return data[key];
  } 
  return null;
}


const jsonString = '{"name":"John", "age":30, "city":"Marseille"}';
const key = "name";
const value = jsonValueKey(jsonString, key);
console.log("La valeur associée à la clé", key, "est", value);


