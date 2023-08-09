
const usePost = () => {
    const postData = (url: string, data: object) => {
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    };
  
    return { postData };
  };

export default usePost;