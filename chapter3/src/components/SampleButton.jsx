const handleClick = () => {
  console.log("this is clicked!");
};

export default function SampleButton() {
  return <input type="button" value="Button" onClick={handleClick} />;
}
