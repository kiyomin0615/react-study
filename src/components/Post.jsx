// Post 컴포넌트 함수
// HTML(=JSX) 코드를 리턴한다
// props라는 매개변수를 통해 여러 인자값을 전달받는다
function Post(props) {
  return (
    <div>
      {/* {placeholder} */}
      {/* JSX 코드에 dynamic value 추가 */}
      {/* 프롭스 사용 */}
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;