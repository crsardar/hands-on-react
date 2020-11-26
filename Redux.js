// Redux Without React. Vanila Redux in JavaScript
// Actions
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect,
    },
  };
};

// Reducers
const claimHistoryReducer = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }

  return oldListOfClaims;
};

const accountingReducer = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};

const policiesReducer = (oldPolicyList = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...oldPolicyList, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return oldPolicyList.filter((item) => item !== action.payload.name);
  }
  return oldPolicyList;
};

const { createStore, combineReducers } = Redux;

const ourDepartment = combineReducers({
  acoounting: accountingReducer,
  claimHistory: claimHistoryReducer,
  policies: policiesReducer,
});

const store = createStore(ourDepartment);

const action = createPolicy("Ganesha", 20);
store.dispatch(action);
console.log(store.getState());
