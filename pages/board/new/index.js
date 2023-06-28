import { useState } from "react";
import {
  Wrapper,
  Title,
  WriterWrapper,
  Writer,
  InputWrapper,
  Label,
  Password,
  Subject,
  Contents,
  SearchButton,
  ZipcodeWrapper,
  AddressWrapper,
  Address,
  Youtube,
  ImageWrapper,
  UploadButton,
  OptionWrapper,
  Zipcode,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  SubmitButton,
  Error,
} from "../../../styles/boardNew";

export default function BoardNewPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value !== "") {
      setWriterError("");
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== "") {
      setPasswordError("");
    }
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value !== "") {
      setTitleError("");
    }
  };

  const handleChangeContents = (e) => {
    setContents(e.target.value);
    if (e.target.value !== "") {
      setContentsError("");
    }
  };

  const SubmitChange = (e) => {
    e.preventDefault();

    if (!name) {
      setWriterError("이름이 없습니다.");
    }
    if (!password) {
      setPasswordError("비밀번호가 없습니다.");
    }
    if (!title) {
      setTitleError("제목이 없습니다.");
    }
    if (!contents) {
      setContentsError("내용이 없습니다.");
    }

    if (name && password && title && contents) {
      alert("게시글이 등록되었습니다.");
    }
  };

  return (
    <Wrapper>
      <Title>게시물등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label htmlFor="name">작성자</Label>
          <Writer
            type="text"
            id="name"
            onChange={handleChangeName}
            placeholder="이름을 적어주세요"
          />
          <Error>{writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="password">비밀번호</Label>
          <Password
            type="password"
            id="password"
            onChange={handleChangePassword}
            placeholder="비밀번호를 적어주세요"
          />
          <Error>{passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>

      <InputWrapper>
        <Label htmlFor="title">제목</Label>
        <Subject
          type="text"
          id="title"
          onChange={handleChangeTitle}
          placeholder="제목을 작성해주세요."
        />
        <Error>{titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="content">내용</Label>
        <Contents
          type="text"
          id="content"
          onChange={handleChangeContents}
          placeholder="내용을 작성해주세요."
        />
        <Error>{contentsError}</Error>
      </InputWrapper>
      <AddressWrapper>
        <Label htmlFor="address">주소</Label>
        <ZipcodeWrapper>
          <Zipcode type="text" id="address" placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </AddressWrapper>
      <InputWrapper>
        <Label htmlFor="video">유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={SubmitChange}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
