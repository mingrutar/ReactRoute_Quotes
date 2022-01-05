import { Fragment, useState, useMemo } from "react";

import NoQuotesFound from "./NoQuotesFound";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const [isAscend, setIsAscend] = useState(true);

  const { quotes } = props;

  const sortedQuotes = useMemo(() => {
    if (isAscend) return quotes.sort((q1, q2) => (q2.text >= q1.text ? 1 : -1));
    else return quotes.sort((q1, q2) => (q1.text >= q2.text ? 1 : -1));
  }, [quotes, isAscend]);
  console.debug(props.quotes, sortedQuotes);

  const onClickHandler = () => {
    setIsAscend(!isAscend);
  };
  const sortText = `Sort ${isAscend ? "Ascending" : "Descending"}`;

  let content = <NoQuotesFound />;
  if (props.quotes.length > 0) {
    content = (
      <>
        <div className={classes.sorting}>
          <button onClick={onClickHandler}>{sortText}</button>
        </div>
        <ul className={classes.list}>
          {sortedQuotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      </>
    );
  }
  return <Fragment>{content}</Fragment>;
};

export default QuoteList;
