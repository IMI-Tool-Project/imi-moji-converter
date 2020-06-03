# IMI 全角半角統一コンポーネント

入力文字列に含まれる全角文字を半角文字に変換した結果を返す関数、
および、
入力文字列に含まれる半角文字を全角文字に変換した結果を返す関数を提供します。
本コンポーネントはライブラリとして外部コンポーネントから使用されることを想定しています。

# 利用者向け情報

## インストール

適当な作業フォルダを作成しモジュールをインストールします。

```
$ mkdir work
$ cd work
$ npm install imi-moji-converter-1.0.0.tgz
```

# API

## toHalfWidth(string)

入力として与えられた string に含まれる全角数字を半角数字に、全角アルファベットを半角アルファベットに、全角カナを半角カナに変換した文字列を返します。

## toFullWidth(string)

入力として与えられた string に含まれる半角数字を全角数字に、半角アルファベットを全角アルファベットに、半角カナを全角カナに変換した文字列を返します。


# 使用例

以下の手順では IMIMojiConverter.toHalfWidth 関数によって全角から半角への変換が、
IMIMojiConverter.toFullWidth 関数によって半角から全角への変換され、
標準出力に出力されます。

```main.js
const IMIMojiConverter = require("imi-moji-converter");
console.log(IMIMojiConverter.toHalfWidth("あかさたな０１２３４５６７８９"));
console.log(IMIMojiConverter.toFullWidth("ｱｶｻﾀﾅ0123456789"));
```

実行すると以下のような出力が得られます。

```
$ node main.js
ｱｶｻﾀﾅ0123456789
あかさたな０１２３４５６７８９
$
```


# 開発者向け情報

## 環境構築

ソースアーカイブ `imi-moji-converter-1.0.0.src.tgz` を入手して、
以下の手順でインストールします。

```
$ mkdir imi-moji-converter
$ cd imi-moji-converter
$ tar xvzf imi-moji-converter-1.0.0.src.tgz
$ npm install
```

## テスト

以下の手順でテストが実行され、テスト結果が出力されます。

```
$ npm test

> mocha



  imi-moji-converter
    toHalfWidth
      ✓ 数字
      ✓ アルファベット
      ✓ カタカナ
    toFullWidth
      ✓ 数字
      ✓ アルファベット
      ✓ カタカナ


  6 passing (11ms)

$
```

## ファイル構成

開発対象となる Javascript は以下のみです。

```
main.js : 関数本体
```

## 依存関係

本ライブラリは <https://www.npmjs.com/package/moji> に依存します。
