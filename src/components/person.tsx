type PersonProps = {
  name: string;
  age: number;
};
const Person = (props: PersonProps) => {
  return (
    <h1>
      hello my name is {props.name} and my age is {props.age}
    </h1>
  );
};

export default Person;
