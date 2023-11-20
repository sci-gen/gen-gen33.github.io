---
layout: post
title:  "ベクトル解析 戸田 第2章 演習問題"
date:   2023-11-20 04:08:40 +0900
categories: vector analysis Toda
---

## 第2章 演習問題
#### [1]
$$
    \frac{1}{2} \frac{dx^2}{dt} = x\frac{dx}{dt}
$$
を利用する。

$$
    A(t) = (x(t), y(t))
$$
のようにAの成分を考えると、Aの微分は

$$
    \frac{dA}{dt} = (\frac{dx}{dt}, \frac{dy}{dt})。
$$

問題の式を成分で変形していくと、

$$
\begin{aligned}
    A\cdot\frac{dA}{dt}
        &= x\frac{dx}{dt} + y\frac{dy}{dt}\\
        &= \frac{1}{2} \frac{d}{dt} \left( x^2 + y^2 \right)\\
        &= \frac{1}{2} \frac{d}{dt} || A ||\\
\end{aligned}
$$

ただし、Aの大きさを
$$||A|| = x^2 + y^2$$
としている。
$$||A||$$
は一定であるから、時間の変化はゼロである。よって、

$$
  A\cdot\frac{dA}{dt} = 0
$$

内積の係数は入れ替えても値が変わらないので、

$$
  \frac{dA}{dt}\cdot A = 0\, ■
$$

良かったら、逆にして成分の計算をしてみてください。また、３次元ベクトルにしても同様に成り立ちます。

<br>

#### [2]

AとBが直交しているため、
$$
    A(t)\cdot B(t) = 0。
$$
そして、両辺tで微分することを考えると、

$$
    \frac{dA}{dt}\cdot B(t) + A\cdot\frac{dB}{dt}= 0。
$$

いま、
$$
\frac{dA}{dt}とB
$$
は直交していることから
$$
\frac{dA}{dt}\cdot B = 0
$$

よって、上式から
$$
A\cdot\frac{dB}{dt}= 0
$$
が成り立つことがわかる。これは、
$$
Aと\frac{dB}{dt}
$$
が直交することを表す■

<br>

#### [3]

A(t)=(x, y, z)、(dA/dt≠0)。B=(a, b, c)のように要素をおいておく。

$$
\begin{aligned}
C 
&= A \times B\\
&=\left( y c - z b, z a - x c, x b - y a \right)
\end{aligned}
$$

これを両辺tで微分する。Cは定ベクトルであるので時間微分はゼロ。

$$
\begin{aligned}
\frac{d}{dt}(右辺) 
&=\left( y c - z b, z a - x c, x b - y a \right)\\
&=  \left(
        \dot{y} c - \dot{z} b,
        \dot{z} a - \dot{x} c,
        \dot{x} b - \dot{y} a
    \right)\\
&= \dot{A} \times B
\end{aligned}
$$

要素が多くなってきたため、混乱しないように時間微分をドットで表す
$$
(\dot{A} = \frac{dA}{dt})。
$$また、定ベクトルBの
$$
\dot{B} = 0
$$
を利用してゼロになる項を消去している。よって、
$$
\dot{A} \times B = 0
$$
つまり、
$$
\dot{A}
$$
とBは平行。また、係数のどちらかにマイナスがつくと逆平行になる■

<br>

#### [4]

$$
\dot{A}\times B=0
$$
なら、
$$
\dot{A}
$$
とBは平行であるから、
$$
\dot{A}
$$
はBのスカラー倍で表すことができる。Bは定ベクトルより、あるスカラー関数f(t)で
$$
\dot{A} = f(t)B
$$
と表すことができる。
両辺tで積分すると、

$$
\begin{aligned}
    A
    &= \int f(t)B dt\\
    &= F(t) B + C
\end{aligned}
$$

ただし、
$$
F(t) = \int f(t) dt、
$$
Cは定ベクトル(積分した時にでてくる積分定数をベクトルでまとめたもの)である■

<br>

#### [5]

条件
$$
C\cdot\dot{A}
=\dot{A}\cdot B
=0
$$
を用いて、

$$
\begin{aligned}
\dot{A}\times (B\times C)
&= B(C\cdot\dot{A}) - C(\dot{A}\cdot B)\\
&= 0
\end{aligned}
$$

$$
D = B\times C
$$
と置けば、
$$
\dot{A}\times D=0。
$$
となって[4]と全く同じ問題に帰着する■

公式
$$
A\times B\times C
$$
は一度、自分で導いておくとよいかもしれません。
