import Card from "../UI/Card";
import classes from './UsersList.module.css'

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
        <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} is ({user.age} years old) is from {user.collage} collage
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UsersList


