import { useState, useEffect, useCallback } from "react";
import { Redirect, Route } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import QuoteList from "./components/quotes/QuoteList";
import QuoteItem from "./components/quotes/QuoteItem";
import QuoteForm from "./components/quotes/QuoteForm";

import classes from "./components/layout/Layout.module.css";

function App() {
  const [quoteList, setQuoteList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const FetchQuoteHandler = useCallback(async () => {
    setIsLoading(true);
    // simulate fetch, wait for 1 sec
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Successfully fetched");
      }, 1000);
    });
    try {
      const val = await promise;
      console.log(val);
    } catch (error) {
      // TODO for real fetch need handle error
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    FetchQuoteHandler();
  }, [FetchQuoteHandler]);

  const onAddQuoteHandler = (newQuote) => {
    const theQuote = { id: Math.random(), ...newQuote };
    setQuoteList((prev) => {
      const newList = [...prev, theQuote];
      // console.debug(theQuote, newList);
      return newList;
    });
  };
  const whichpath = quoteList.length === 0 ? "/add" : "/quotes";

  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>
        <Route path="/add">
          <QuoteForm isLoading={isLoading} onAddQuote={onAddQuoteHandler} />
        </Route>
        <Route path="/quotes" exact>
          <QuoteList quotes={quoteList} />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteItem />
        </Route>

        <Route path="/">
          <Redirect to={whichpath} />
        </Route>
      </main>
    </div>
  );
}

export default App;
