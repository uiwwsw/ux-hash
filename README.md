# ux-hash
![](demo/sample.gif)
## contenteditable 속성으로 커스터마이징하긴 너무 손이 많이가고, 
## 간단하고 손 쉽게 컬러링 하는 방법!
## textarea에서 해쉬태그를 작성하는데 도움을 주는 라이브러리
## Library to help you write hashtags in textarea

## 설치
`npm i -S ux-hash` 또는 `https://unpkg.com/ux-hash/dist/js/ux-hash.regacy.js`

### 사용방법

1. 기본사용

```html
    <div id="test"></div>
```
```typescript
    type Theme = {
        bg:string,   //해쉬태그의 백그라운드 컬러. rgba값 추천
        color:string, //해쉬태그의 폰트컬러
        key:string //#,@같은 해쉬태그 키값
    };
    const themes: Theme[] = [{key:'#',bg: 'rgba(23,23,23,.3)', color: '#fff'}];
    new UxHash('#test', themes);
```
1. 폰트크기등, 스타일 변경 시  
`textarea`를 직접 수정하지 않고   
이벤트 선언된 객체, 즉 `#test`에 스타일을 줍니다.  
```html
    <div id="test" class="test"></div>
```
```css
.test {
    line-height: 3;
    word-spacing: 1px;
    color: red;
    font: ~~~~~;
}
```
직접 수정해야할 땐,   
`selector > textarea, selector > display`로    
두개의 셀렉터에 동일한 스타일을 주어야 합니다.
```css
.test > textarea,
.test > div{
    line-height: 3;
    word-spacing: 1px;
    color: red;
    font: ~~~~~;
}
```
1. 이벤트 강제로 주기  
`textarea`에 직접 접근하여 `value`를 변경했거나,    
 타 라이브러리를 사용하여 값이 변경되었다면    
hash태그가 생성되지 않을 수 있습니다.    
이땐 강제로 이벤트를 실행할 수 있습니다.  
```typescript
    const hash = new UxHash('#test', themes);
    hash.keyEvent();
    //또는
    UxHash.keyEvent('#test', themes);
```
    
## 개발 이유
모든 라이브러리가 많은 기능을 담아야 할 필요는 없다고 생각합니다.   
모 프로젝트 진행 당시, 기획자들에겐 대단한 에디터보다  
textarea의 기본기능에 컬러변경, 배경색지정등의 단순한 기능만으로 충분히 만족한다는 사실을 깨닳았습니다.  
그래서 간단히 만들어 낼 순 없을까를 고민하다 제작하게 되었습니다.

이 라이브러리는 textarea와 value값을 공유하는 div태그를 css를 동일하게 사용하여 완벽하게
겹쳐 둔 상태입니다.
보통의 글자는 투명으로 처리하고, 특징적인 문자들에 대해서 컬러 또는 배경색을 지정하여  
마치 에디터인마냥 흉내내고 있습니다.