# CSS3新特性

#### 1选择器
- ~
- \[src^="https"]
- \[src$=".pdf"]
- \[src*="abc"]
- :first-of-type
- :last-of-type
- :only-of-type
- :only-child
- :nth-child(n)
- :nth-last-child(n)
- :nth-of-type(n)
- :nth-last-of-type(n)
- :last-child

#### 2新样式
1. 边框：border-radius，border-image，box-shadow，水平阴影和垂直阴影必须设置
2. 背景：background-clip，bacground-origin，background-size和background-break
3. 文字：word-warp, text-overflow, text-shadow, text-decoration
4. 颜色：rgba，hsla

#### 3transition过渡
可以支持一个或多个css属性的过渡效果，多个属性用逗号分隔，必须规定过渡效果和持续时间。
transition：多个属性，时间，效果曲线ease，延迟时间

#### 4transform转换
使用方式
- transform: translate(120px, 50%)
- transform: scale(2, 0.5)
- transform: rotate(0.5turn)
- transform: skew(30deg, 20deg)

#### 5animation动画
属性
- annimation-name
- annimation-duration
- annimation-timing-function
- annimation-delay
- annimation-iteration-count
- annimation-direction
- annimation-play-state
- annimation-fill-mode

#### 6渐变
- linear-gradient
- radial-gradient

#### 7flex布局

#### 8媒体查询
@media(max-width: 600px) {

}