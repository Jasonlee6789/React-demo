import { useState, useEffect, useReducer, useRef } from "react";
import axios from "axios";

function getDataReducer(state, action) {
  switch (action.type) {
    case "GET_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "GET-FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
}

export function useGetAPI(initialURL, initialData) {
  const [url, setURL] = useState(initialURL);

  const [state, dispatch] = useReducer(getDataReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: "GET_INIT" });

      try {
        const response = await axios.get(url);
        console.log(response);
        dispatch({ type: "GET_SUCCESS", payload: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "GET_FAILURE" });
      }
    };
    getData();
  }, [url]);

  return [state, setURL];
}

function postDataReducer(state, action) {
  switch (action.type) {
    case "POST_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "POST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: action.payload,
      };

    case "POST_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
}

export function usePostAPI(initialURL, initialBody) {
  //   const [url, setURL] = useState(initialURL);
  const [body, setBody] = useState(initialBody);
  const didMountRef = useRef(false);
  const [url] = useState(initialURL);

  const [state, dispatch] = useReducer(postDataReducer, {
    isLoading: false,
    isError: false,
    data: initialBody,
  });

  useEffect(() => {
    const postData = async () => {
      dispatch({ type: "POST_INIT" });

      try {
        const response = await axios.post(url, body);
        console.log(response);
        dispatch({ type: "POST_SUCCESS", payload: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "POST_FAILURE" });
      }
    };

    if (didMountRef.current && body) {
      postData();
    } else {
      didMountRef.current = true;
    }
  }, [url, body]);

  return [state, setBody];
}

function putDataReducer(state, action) {
  switch (action.type) {
    case "PUT_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "PUT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case "PUT_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
}

export function usePutAPI(initialURL, initialBody) {
  const [url] = useState(initialURL);
  const [body, setBody] = useState(initialBody);

  const [state, dispatch] = useReducer(putDataReducer, {
    isLoading: false,
    isError: false,
    data: initialBody,
  });

  useEffect(() => {
    const putData = async () => {
      dispatch({ type: "PUT_INIT" });

      try {
        const response = await axios.put(url, body);
        console.log(response);

        dispatch({ type: "PUT_SUCCESS", payload: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "PUT_FAILURE" });
      }
    };
    putData();
  }, [url, body]);

  return [state, setBody];
}

function deleteDataReducer(state, action) {
  switch (action.type) {
    case "DELETE_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "DELETE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case "DELETE_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      throw new Error();
  }
}

export function useDeleteAPI(initialURL, initialData) {
  const [url, setURL] = useState(initialURL);

  const [state, dispatch] = useReducer(deleteDataReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    const deleteData = async () => {
      dispatch({ type: "DELETE_INIT" });

      try {
        const response = await axios.delete(url);
        console.log(response);

        dispatch({
          type: "DELETE_SUCCESS",
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
        dispatch({ type: "DELETE_FAILURE" });
      }
    };

    deleteData();
  }, [url]);

  return [state, setURL];
}
