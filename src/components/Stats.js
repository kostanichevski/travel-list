export function Stats({ items }) {
  if (!items.length)
    // basically if there are not items in the array, dont do anything typed below as it is unnecessary and just display this message instead
    return (
      <p className="stats">
        <em>Start adding some items to your list 📝</em>
      </p>
    );
  const numItems = items.length; //we derived the state of items instead of creating a new state which is completely unnecessary because that state would depend on the 'items' state. Instead we derive it and pass it down using props to the component where we need it, or we can just directly calculate it in the component as we are doing here(It's not practical to pass it down as a prop when we need to calculate more things). This is the 'Stats' component, basically the footer(the blue box stating how many items we have in our list and how many we have already packed)
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100); // we use math.round to round up any decimals
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You have packed all ${numItems} items   ✅`
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
        {/* 💼 You have {numItems} items on your list, and you already packed{" "}
            {numPacked} ({percentage}%) */}
      </em>
    </footer>
  );
}
