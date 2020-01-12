"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UxHash =
/*#__PURE__*/
function () {
  function UxHash(querySelector, themes) {
    _classCallCheck(this, UxHash);

    this.id = Math.random().toString(36).substr(2, 9);
    this.querySelector = querySelector;
    this.keys = themes.map(function (theme) {
      return theme.key;
    });
    this.colors = themes.map(function (theme) {
      return theme.color;
    });
    this.bgs = themes.map(function (theme) {
      return theme.bg;
    });
    this.wrapperElement = document.querySelector(this.querySelector);
    this.textareaElement = document.createElement('textarea');
    this.displayElement = document.createElement('div');
    this.makeStyle();
    this.wrapperElement.appendChild(this.textareaElement);
    this.wrapperElement.appendChild(this.displayElement);
    this.displayElement.style.right = this.textareaElement.scrollWidth - this.textareaElement.clientWidth + 'px';
    this.textareaElement.onkeyup = this.keyEvent.bind(this);
    this.textareaElement.onscroll = this.scrollEvent.bind(this);
  }

  _createClass(UxHash, [{
    key: "makeStyle",
    value: function makeStyle() {
      var commonStyle = 'overflow: auto;overflow-x: hidden;display: block !important;height: 100%;margin: 0;padding: 0;border: 0;line-height: inherit;word-spacing: inherit;color: inherit;font: inherit;resize: none;outline: none;word-break: initial;white-space: pre-wrap;transform: translate3d(0, 0, 0);';
      this.wrapperElement.style.position = 'relative';
      this.wrapperElement.style.fontSize = '12px';
      this.textareaElement.setAttribute('style', commonStyle + 'width: 100%;');
      this.displayElement.setAttribute('style', commonStyle + 'position: absolute;top: 0;right: 0;left: 0;overflow: hidden;color: transparent;pointer-events: none;');
    }
  }, {
    key: "scrollEvent",
    value: function scrollEvent() {
      this.displayElement.scrollTop = this.textareaElement.scrollTop;
      this.textareaElement.scrollTop = this.displayElement.scrollTop;
    }
  }, {
    key: "mask",
    value: function mask() {
      var _this = this;

      var res = '';
      this.textareaElement.value.split('\n').forEach(function (line, i) {
        res += i === 0 ? '' : '\n';
        line.split(' ').forEach(function (word, j) {
          res += j === 0 ? '' : ' ';

          var index = _this.keys.indexOf(word[0]);

          if (index === -1) {
            res += word;
          } else {
            res += "<span style=\"margin: -.2em;padding: 0 .2em;border-radius: 1em;color:".concat(_this.colors[index], ";background:").concat(_this.bgs[index], ";\">").concat(word, "</span>");
          }
        });
      });
      return res + '\n\n';
    }
  }, {
    key: "keyEvent",
    value: function keyEvent() {
      this.displayElement.innerHTML = this.mask();
      this.scrollEvent();
    }
  }], [{
    key: "keyEvent",
    value: function keyEvent(querySelector, themes) {
      var wrapperElement = document.querySelector(querySelector);
      var textareaElement = wrapperElement.querySelector('textarea');
      var displayElement = wrapperElement.querySelector('div');
      var id = wrapperElement.className;
      var value = wrapperElement.querySelector('textarea').value;
      var keys = themes.map(function (theme) {
        return theme.key;
      });
      var colors = themes.map(function (theme) {
        return theme.color;
      });
      var bgs = themes.map(function (theme) {
        return theme.bg;
      });
      var res = '';
      value.split('\n').forEach(function (line, i) {
        res += i === 0 ? '' : '\n';
        line.split(' ').forEach(function (word, j) {
          res += j === 0 ? '' : ' ';
          var index = keys.indexOf(word[0]);

          if (index === -1) {
            res += word;
          } else {
            res += "<span style=\"margin: -.2em;padding: 0 .2em;border-radius: 1em;color:".concat(colors[index], ";background:").concat(bgs[index], ";\">").concat(word, "</span>");
          }
        });
      });
      displayElement.scrollTop = textareaElement.scrollTop;
      textareaElement.scrollTop = displayElement.scrollTop;
      displayElement.innerHTML = res + '\n\n';
    }
  }]);

  return UxHash;
}();

exports["default"] = UxHash;
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2luZGV4LnRzIiwidHMvdHlwZS5qcyJdLCJuYW1lcyI6WyJVeEhhc2giLCJxdWVyeVNlbGVjdG9yIiwidGhlbWVzIiwiaWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJrZXlzIiwibWFwIiwidGhlbWUiLCJrZXkiLCJjb2xvcnMiLCJjb2xvciIsImJncyIsImJnIiwid3JhcHBlckVsZW1lbnQiLCJkb2N1bWVudCIsInRleHRhcmVhRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkaXNwbGF5RWxlbWVudCIsIm1ha2VTdHlsZSIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJyaWdodCIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJvbmtleXVwIiwia2V5RXZlbnQiLCJiaW5kIiwib25zY3JvbGwiLCJzY3JvbGxFdmVudCIsImNvbW1vblN0eWxlIiwicG9zaXRpb24iLCJmb250U2l6ZSIsInNldEF0dHJpYnV0ZSIsInNjcm9sbFRvcCIsInJlcyIsInZhbHVlIiwic3BsaXQiLCJmb3JFYWNoIiwibGluZSIsImkiLCJ3b3JkIiwiaiIsImluZGV4IiwiaW5kZXhPZiIsImlubmVySFRNTCIsIm1hc2siLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLE07OztBQVNqQixrQkFBWUMsYUFBWixFQUFtQ0MsTUFBbkMsRUFBa0Q7QUFBQTs7QUFDOUMsU0FBS0MsRUFBTCxHQUFVQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsTUFBM0IsQ0FBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBVjtBQUNBLFNBQUtOLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS08sSUFBTCxHQUFZTixNQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsYUFBa0JBLEtBQUssQ0FBQ0MsR0FBeEI7QUFBQSxLQUFYLENBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWNWLE1BQU0sQ0FB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QUFBQSxJQUFJLENBQUNGLEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxPQUFoQixDQUF3QixVQUFDRyxJQUFELEVBQWVDLENBQWYsRUFBNEI7QUFDaERQLFVBQUFBLEdBQUcsSUFBS08sQ0FBQyxLQUFLLENBQU4sR0FBVSxFQUFWLEdBQWUsR0FBdkI7QUFDQSxjQUFNQyxLQUFLLEdBQUdyQyxJQUFJLENBQUNzQyxPQUFMLENBQWFILElBQUksQ0FBQyxDQUFELENBQWpCLENBQWQ7O0FBQ0EsY0FBSUUsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNkUixZQUFBQSxHQUFHLElBQUlNLElBQVA7QUFDSCxXQUZELE1BRU87QUFDSE4sWUFBQUEsR0FBRyxtRkFBMkV6QixNQUFNLENBQUNpQyxLQUFELENBQWpGLHlCQUF1Ry9CLEdBQUcsQ0FBQytCLEtBQUQsQ0FBMUcsaUJBQXVIRixJQUF2SCxZQUFIO0FBQ0g7QUFDSixTQVJEO0FBU0gsT0FYRDtBQVlBdkIsTUFBQUEsY0FBYyxDQUFDZ0IsU0FBZixHQUEyQmxCLGVBQWUsQ0FBQ2tCLFNBQTNDO0FBQ0FsQixNQUFBQSxlQUFlLENBQUNrQixTQUFoQixHQUE0QmhCLGNBQWMsQ0FBQ2dCLFNBQTNDO0FBQ0FoQixNQUFBQSxjQUFjLENBQUMyQixTQUFmLEdBQTJCVixHQUFHLEdBQUcsTUFBakM7QUFDSDs7Ozs7OztBQ2hFTCIsImZpbGUiOiJqcy91eC1oYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXhIYXNoIHtcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBxdWVyeVNlbGVjdG9yOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB3cmFwcGVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0ZXh0YXJlYUVsZW1lbnQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkaXNwbGF5RWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBrZXlzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIGNvbG9yczogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBiZ3M6IHN0cmluZ1tdO1xuICAgIGNvbnN0cnVjdG9yKHF1ZXJ5U2VsZWN0b3I6IHN0cmluZywgdGhlbWVzOiBUaGVtZVtdKSB7XG4gICAgICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvciA9IHF1ZXJ5U2VsZWN0b3I7XG4gICAgICAgIHRoaXMua2V5cyA9IHRoZW1lcy5tYXAoKHRoZW1lOiBUaGVtZSkgPT4gdGhlbWUua2V5KTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSB0aGVtZXMubWFwKCh0aGVtZTogVGhlbWUpID0+IHRoZW1lLmNvbG9yKTtcbiAgICAgICAgdGhpcy5iZ3MgPSB0aGVtZXMubWFwKCh0aGVtZTogVGhlbWUpID0+IHRoZW1lLmJnKTtcbiAgICAgICAgdGhpcy53cmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5xdWVyeVNlbGVjdG9yKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgdGhpcy50ZXh0YXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0aGlzLmRpc3BsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMubWFrZVN0eWxlKCk7XG4gICAgICAgIHRoaXMud3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0YXJlYUVsZW1lbnQpO1xuICAgICAgICB0aGlzLndyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZGlzcGxheUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmRpc3BsYXlFbGVtZW50LnN0eWxlLnJpZ2h0ID0gdGhpcy50ZXh0YXJlYUVsZW1lbnQuc2Nyb2xsV2lkdGggLSB0aGlzLnRleHRhcmVhRWxlbWVudC5jbGllbnRXaWR0aCArICdweCc7XG4gICAgICAgIHRoaXMudGV4dGFyZWFFbGVtZW50Lm9ua2V5dXAgPSB0aGlzLmtleUV2ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudGV4dGFyZWFFbGVtZW50Lm9uc2Nyb2xsID0gdGhpcy5zY3JvbGxFdmVudC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG1ha2VTdHlsZSgpIHtcbiAgICAgICAgY29uc3QgY29tbW9uU3R5bGUgPSAnb3ZlcmZsb3c6IGF1dG87b3ZlcmZsb3cteDogaGlkZGVuO2Rpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7aGVpZ2h0OiAxMDAlO21hcmdpbjogMDtwYWRkaW5nOiAwO2JvcmRlcjogMDtsaW5lLWhlaWdodDogaW5oZXJpdDt3b3JkLXNwYWNpbmc6IGluaGVyaXQ7Y29sb3I6IGluaGVyaXQ7Zm9udDogaW5oZXJpdDtyZXNpemU6IG5vbmU7b3V0bGluZTogbm9uZTt3b3JkLWJyZWFrOiBpbml0aWFsO3doaXRlLXNwYWNlOiBwcmUtd3JhcDt0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOydcbiAgICAgICAgdGhpcy53cmFwcGVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRoaXMud3JhcHBlckVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMTJweCc7XG4gICAgICAgIHRoaXMudGV4dGFyZWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb21tb25TdHlsZSArICd3aWR0aDogMTAwJTsnKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29tbW9uU3R5bGUgKyAncG9zaXRpb246IGFic29sdXRlO3RvcDogMDtyaWdodDogMDtsZWZ0OiAwO292ZXJmbG93OiBoaWRkZW47Y29sb3I6IHRyYW5zcGFyZW50O3BvaW50ZXItZXZlbnRzOiBub25lOycgKTtcbiAgICB9XG5cbiAgICBzY3JvbGxFdmVudCgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5RWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLnRleHRhcmVhRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIHRoaXMudGV4dGFyZWFFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMuZGlzcGxheUVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIHN0YXRpYyBrZXlFdmVudChxdWVyeVNlbGVjdG9yOiBzdHJpbmcsIHRoZW1lczogVGhlbWVbXSkge1xuICAgICAgICBjb25zdCB3cmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlTZWxlY3RvcikgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRleHRhcmVhRWxlbWVudCA9IHdyYXBwZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICAgICAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSB3cmFwcGVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgY29uc3QgaWQgPSB3cmFwcGVyRWxlbWVudC5jbGFzc05hbWU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gd3JhcHBlckVsZW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKSEudmFsdWU7XG4gICAgICAgIGNvbnN0IGtleXMgPSB0aGVtZXMubWFwKCh0aGVtZTogVGhlbWUpID0+IHRoZW1lLmtleSk7XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IHRoZW1lcy5tYXAoKHRoZW1lOiBUaGVtZSkgPT4gdGhlbWUuY29sb3IpO1xuICAgICAgICBjb25zdCBiZ3MgPSB0aGVtZXMubWFwKCh0aGVtZTogVGhlbWUpID0+IHRoZW1lLmJnKTtcbiAgICAgICAgbGV0IHJlcyA9ICcnO1xuICAgICAgICB2YWx1ZS5zcGxpdCgnXFxuJykuZm9yRWFjaCgobGluZTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJlcyArPSAoaSA9PT0gMCA/ICcnIDogJ1xcbicpO1xuICAgICAgICAgICAgbGluZS5zcGxpdCgnICcpLmZvckVhY2goKHdvcmQ6IHN0cmluZywgajogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzICs9IChqID09PSAwID8gJycgOiAnICcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0ga2V5cy5pbmRleE9mKHdvcmRbMF0pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzICs9IHdvcmQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzICs9IGA8c3BhbiBzdHlsZT1cIm1hcmdpbjogLS4yZW07cGFkZGluZzogMCAuMmVtO2JvcmRlci1yYWRpdXM6IDFlbTtjb2xvcjoke2NvbG9yc1tpbmRleF19O2JhY2tncm91bmQ6JHtiZ3NbaW5kZXhdfTtcIj4ke3dvcmR9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpc3BsYXlFbGVtZW50LnNjcm9sbFRvcCA9IHRleHRhcmVhRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIHRleHRhcmVhRWxlbWVudC5zY3JvbGxUb3AgPSBkaXNwbGF5RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGRpc3BsYXlFbGVtZW50LmlubmVySFRNTCA9IHJlcyArICdcXG5cXG4nO1xuICAgIH1cblxuICAgIG1hc2soKSB7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0YXJlYUVsZW1lbnQudmFsdWUuc3BsaXQoJ1xcbicpLmZvckVhY2goKGxpbmU6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXMgKz0gKGkgPT09IDAgPyAnJyA6ICdcXG4nKTtcbiAgICAgICAgICAgIGxpbmUuc3BsaXQoJyAnKS5mb3JFYWNoKCh3b3JkOiBzdHJpbmcsIGo6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJlcyArPSAoaiA9PT0gMCA/ICcnIDogJyAnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMua2V5cy5pbmRleE9mKHdvcmRbMF0pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzICs9IHdvcmQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzICs9IGA8c3BhbiBzdHlsZT1cIm1hcmdpbjogLS4yZW07cGFkZGluZzogMCAuMmVtO2JvcmRlci1yYWRpdXM6IDFlbTtjb2xvcjoke3RoaXMuY29sb3JzW2luZGV4XX07YmFja2dyb3VuZDoke3RoaXMuYmdzW2luZGV4XX07XCI+JHt3b3JkfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzICsgJ1xcblxcbic7XG4gICAgfVxuXG4gICAga2V5RXZlbnQoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5tYXNrKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsRXZlbnQoKTtcbiAgICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG4iXX0=
