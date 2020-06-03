const toHalfWidth = require("../main").toHalfWidth;
const toFullWidth = require("../main").toFullWidth;
const expect = require('chai').expect;

describe('imi-moji-converter', () => {
  describe('toHalfWidth', () => {
    it("数字", () => {
      expect(toHalfWidth("０１２３４５６７８９")).to.equal("0123456789");
    });
    it("アルファベット", () => {
      expect(toHalfWidth("ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ")).to.equal("abcdefghijklmnopqrstuvwxyz");
      expect(toHalfWidth("ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ")).to.equal("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it("カタカナ", () => {
      expect(toHalfWidth("アイウエオ")).to.equal("ｱｲｳｴｵ");
      expect(toHalfWidth("カキクケコ")).to.equal("ｶｷｸｹｺ");
      expect(toHalfWidth("サシスセソ")).to.equal("ｻｼｽｾｿ");
      expect(toHalfWidth("タチツテト")).to.equal("ﾀﾁﾂﾃﾄ");
      expect(toHalfWidth("ナニヌネノ")).to.equal("ﾅﾆﾇﾈﾉ");
      expect(toHalfWidth("ハヒフヘホ")).to.equal("ﾊﾋﾌﾍﾎ");
      expect(toHalfWidth("マミムメモ")).to.equal("ﾏﾐﾑﾒﾓ");
      expect(toHalfWidth("ヤユヨ")).to.equal("ﾔﾕﾖ");
      expect(toHalfWidth("ラリルレロ")).to.equal("ﾗﾘﾙﾚﾛ");
      expect(toHalfWidth("ワヲン")).to.equal("ﾜｦﾝ");
      expect(toHalfWidth("ァィゥェォッャュョ")).to.equal("ｧｨｩｪｫｯｬｭｮ");
      expect(toHalfWidth("ガギグゲゴ")).to.equal("ｶﾞｷﾞｸﾞｹﾞｺﾞ");
      expect(toHalfWidth("ザジズゼゾ")).to.equal("ｻﾞｼﾞｽﾞｾﾞｿﾞ");
      expect(toHalfWidth("ダヂヅデド")).to.equal("ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ");
      expect(toHalfWidth("バビブベボ")).to.equal("ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ");
      expect(toHalfWidth("パピプペポ")).to.equal("ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ");
      expect(toHalfWidth("ヴ")).to.equal("ｳﾞ");
      expect(toHalfWidth("ー")).to.equal("ｰ");
      expect(toHalfWidth("・")).to.equal("･");
      expect(toHalfWidth("。")).to.equal("｡");
      expect(toHalfWidth("、")).to.equal("､");
      expect(toHalfWidth("「")).to.equal("｢");
      expect(toHalfWidth("」")).to.equal("｣");
    });
  });

  describe('toFullWidth', () => {
    it("数字", () => {
      expect(toFullWidth("0123456789")).to.equal("０１２３４５６７８９");
    });
    it("アルファベット", () => {
      expect(toFullWidth("abcdefghijklmnopqrstuvwxyz")).to.equal("ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ");
      expect(toFullWidth("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).to.equal("ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ");
    });
    it("カタカナ", () => {
      expect(toFullWidth("ｱｲｳｴｵ")).to.equal("アイウエオ");
      expect(toFullWidth("ｶｷｸｹｺ")).to.equal("カキクケコ");
      expect(toFullWidth("ｻｼｽｾｿ")).to.equal("サシスセソ");
      expect(toFullWidth("ﾀﾁﾂﾃﾄ")).to.equal("タチツテト");
      expect(toFullWidth("ﾅﾆﾇﾈﾉ")).to.equal("ナニヌネノ");
      expect(toFullWidth("ﾊﾋﾌﾍﾎ")).to.equal("ハヒフヘホ");
      expect(toFullWidth("ﾏﾐﾑﾒﾓ")).to.equal("マミムメモ");
      expect(toFullWidth("ﾔﾕﾖ")).to.equal("ヤユヨ");
      expect(toFullWidth("ﾗﾘﾙﾚﾛ")).to.equal("ラリルレロ");
      expect(toFullWidth("ﾜｦﾝ")).to.equal("ワヲン");
      expect(toFullWidth("ｧｨｩｪｫｯｬｭｮ")).to.equal("ァィゥェォッャュョ");
      expect(toFullWidth("ｶﾞｷﾞｸﾞｹﾞｺﾞ")).to.equal("ガギグゲゴ");
      expect(toFullWidth("ｻﾞｼﾞｽﾞｾﾞｿﾞ")).to.equal("ザジズゼゾ");
      expect(toFullWidth("ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ")).to.equal("ダヂヅデド");
      expect(toFullWidth("ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ")).to.equal("バビブベボ");
      expect(toFullWidth("ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ")).to.equal("パピプペポ");
      expect(toFullWidth("ｳﾞ")).to.equal("ヴ");
      expect(toFullWidth("ｰ")).to.equal("ー");
      expect(toFullWidth("･")).to.equal("・");
      expect(toFullWidth("｡")).to.equal("。");
      expect(toFullWidth("､")).to.equal("、");
      expect(toFullWidth("｢")).to.equal("「");
      expect(toFullWidth("｣")).to.equal("」");
    });
  });
});
