type PeopleProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const People = (props: PeopleProps) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};

export default People;
