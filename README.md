# ux-hash
![](demo/sample.gif)
## textarea에서 해쉬태그를 작성하는데 도움을 주는 라이브러리
## Library to help you write hashtags in textarea

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
textarea를 직접 수정하지 않고 
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
직접 수정해야할 땐, selector > textarea, selector > display로 두개의 셀렉터에 동일한 스타일을 주어야 합니다.
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
`testarea`에 직접 접근하여 `value`를 변경했거나, 타 라이브러리를 사용하여 값이 변경되었다면  
hash태그가 생성되지 않을 수 있습니다.  
이땐 강제로 이벤트를 실행할 수 있습니다.
```typescript
    const hash = new UxHash('#test', themes);
    hash.keyEvent();
    //또는
    UxHash.keyEvent('#test', themes);
```
    
