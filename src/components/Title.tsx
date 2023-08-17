type HeadLine = {
  headLine: string;
};

export default function Title({ headLine }:HeadLine) {
  return (
    <h2>{headLine}</h2>
  );
}
