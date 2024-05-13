type PersonProps = {
  name: string;
  age: number;
  isLoggedIn: boolean;
};
const Person = (props: PersonProps) => {
  return (
    <div>
      <h1>{props.isLoggedIn ? `hello my name is ${props.name} and my age is ${props.age}` : `you are not logged in`}</h1>
    </div>
  );
};

export default Person;
