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
} from "../../../styles/boardNew";

export default function BoardNewPage() {
  return (
    <Wrapper>
      <Title>게시물등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label htmlFor="name">작성자</Label>
          <Writer type="text" id="name" placeholder="이름을 적어주세요" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="password">비밀번호</Label>
          <Password
            type="password"
            id="password"
            placeholder="비밀번호를 적어주세요"
          />
        </InputWrapper>
      </WriterWrapper>

      <InputWrapper>
        <Label htmlFor="title">제목</Label>
        <Subject type="text" id="title" placeholder="제목을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="content">내용</Label>
        <Contents type="text" id="content" placeholder="내용을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="address">주소</Label>
        <ZipcodeWrapper>
          <Zipcode type="text" id="address" placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
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
        <SubmitButton>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
