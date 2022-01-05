import { Fragment } from "react";

import NoQuotesFound from "./NoQuotesFound";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  let content = <NoQuotesFound />;
  if (props.quotes.length > 0) {
    content = (
      <>
        <div className={classes.sorting}>
          <button onClick={props.sorter}>Sort Ascending</button>
        </div>
        <ul className={classes.list}>
          {props.quotes.map((quote) => (
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
