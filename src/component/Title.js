const Title = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.name}</h3>

            {/* react식 조건문 - 앞에꺼가 참이면 뒤에꺼 실행(출력) */}
            {props.children && props.children}
        </div>
    );
};
export default Title;
