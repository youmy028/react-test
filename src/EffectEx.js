import React, { useEffect, useState } from "react";

const EffectEx = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  return (
    <>
      {/* 안녕하세요 이부분은 주석입니다. */}
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickname} onChange={onChangeNickname}></input>
      </div>
    </>
  );
};

export default EffectEx;
