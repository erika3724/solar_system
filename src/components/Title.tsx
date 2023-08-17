type HeadLine = {
  headLine: string;
};

export default function Title(param:HeadLine) {
  const { headLine } = param;
  return (
    <h2>{headLine}</h2>
  );
}
