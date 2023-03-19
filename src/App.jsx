import Post from "./components/Post";

function App() {

  return (
    // JSX 코드로 리턴하는 요소(컴포넌트)는 단 하나!!!
    // 여러개의 형제 요소(컴포넌트)를 렌더링하고 싶으면
    // 반드시 하나의 부모 요소(컴포넌트)로 묶어서 사용한다
    <main>
      {/* <Post>로 사용할 수 없다 */}
      {/* <Post /> 또는 <Post></Post> */}
      {/* Props: 컴포넌트의 매개변수(Parameters) 또는 컴포넌트의 커스텀 속성(Attributes) */}
      <Post author="Kiyomin" body="I'm studying React.js right now!"/>
      <Post author="Yuuka" body="I am supporting Kiyomin!"/>
    </main>
  );
}

export default App