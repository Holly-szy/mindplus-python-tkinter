enum resizable {
    //% block="是"
    True,
    //% block="否"
    False
}
enum button {
    //% block="文本"
    text,
    //% block="变量"
    textvariable
}
enum entry {
    //% block="明文"
    None,
    //% block="密文"
    '*'
}
enum scale {
    //% block="竖向"
    VERTICAL,
    //% block="横向"
    HORIZONTAL
}
enum bl {
    //% block="字符串型"
    StringVar,
    //% block="整数型"
    IntVar,
    //% block="浮点型"
    DoubleVar,
    //% block="布尔型"
    BooleanVar
}
//% color="#24936E" iconWidth=40 iconHeight=40
namespace tkinter {

    //% block="创建界面[STR]" blockType="command"
    //% STR.shadow="string" STR.defl=root
    export function tk(parameter: any, block: any) {
        let STR = parameter.STR.code;
        Generator.addCode(mind(STR) + " = Tk()");
        Generator.addImport(`from tkinter import *`)
    }

    //% block="消息循环[STR]" blockType="command"
    //% STR.shadow="string" STR.defl=root
    export function mainloop(parameter: any, block: any) {
        let STR = parameter.STR.code;
        Generator.addCode(mind(STR) + ".mainloop()");
        Generator.addImport(`from tkinter import *`)
    }

    //% block="[STR]设置界面标题[a]" blockType="command"
    //% STR.shadow="string" STR.defl=root
    //% a.shadow="string" a.defl=title
    export function title(parameter: any, block: any) {
        let STR = parameter.STR.code;
        let a = parameter.a.code;
        Generator.addCode(mind(STR) + ".title(" + a + ")");
        Generator.addImport(`from tkinter import *`)
    }

    //% block="[STR]设置界面大小 宽[a]高[b]" blockType="command"
    //% STR.shadow="string" STR.defl=root
    //% a.shadow="number" a.defl=300
    //% b.shadow="number" b.defl=200
    export function geometry(parameter: any, block: any) {
        let STR = parameter.STR.code;
        let a = parameter.a.code;
        let b = parameter.b.code;
        Generator.addCode(mind(STR) + ".geometry(\"" + a + "x" + b + "\")");
        Generator.addImport(`from tkinter import *`)
    }

    //% block="[STR]界面可调整大小？宽[a]高[b]" blockType="command"
    //% STR.shadow="string" STR.defl=root
    //% a.shadow="dropdown" a.options="resizable" a.defl=resizable.True
    //% b.shadow="dropdown" b.options="resizable" b.defl=resizable.True
    export function resizable(parameter: any, block: any) {
        let STR = parameter.STR.code;
        let a = parameter.a.code;
        let b = parameter.b.code;
        Generator.addCode(mind(STR) + ".resizable(width=" + a + ", height=" + b + ")");
        Generator.addImport(`from tkinter import *`)
    }

    //% block="---"
    export function aaa(parameter: any, block: any) {
    }

    //% block="新建[bl]变量为[STR]" blockType="command"
    //% STR.shadow="string" STR.defl=a
    //% bl.shadow="dropdown"   bl.options="bl"     bl.defl="bl.StringVar"
    export function bl(parameter: any, block: any) {
        let STR = parameter.STR.code;
        let bl = parameter.bl.code;
        Generator.addCode(mind(STR) + " = " + bl + "()");
        Generator.addImport(`from tkinter import *`)
    }

    //% block="设置变量[STR]为[a]" blockType="command"
    //% STR.shadow="string" STR.defl=a
    //% a.shadow="string" a.defl=Hello
    export function set(parameter: any, block: any) {
        let STR = parameter.STR.code;
        let a = parameter.a.code;
        Generator.addCode(mind(STR) + ".set(" + a + ")");
        Generator.addImport(`from tkinter import *`)
    }

    //% block="变量[VALUE]" blockType="reporter"
    //% VALUE.shadow="string" VALUE.defl=a
    export function dtbl(parameter: any, block: any) {
        let VALUE = parameter.VALUE.code;
        Generator.addCode(mind(VALUE) + ".get()")
    }

    //% block="---"
    export function bbb(parameter: any, block: any) {
    }

    //% block="显示控件[STR]" blockType="command"
    //% STR.shadow="string" STR.defl=Button
    export function pack(parameter: any, block: any) {
        let STR = parameter.STR.code;
        Generator.addCode(mind(STR) + ".pack()");
        Generator.addImport(`from tkinter import *`)
    }

    //% block="隐藏控件[STR]" blockType="command"
    //% STR.shadow="string" STR.defl=Button
    export function pack_forget(parameter: any, block: any) {
        let STR = parameter.STR.code;
        Generator.addCode(mind(STR) + ".pack_forget()");
        Generator.addImport(`from tkinter import *`)
    }

    //% block="创建按钮[STR]到[a][wb][b]宽[d]高[e]函数[c]" blockType="command"
    //% STR.shadow="string" STR.defl=Button
    //% a.shadow="string" a.defl=root
    //% b.shadow="string" b.defl=Hello
    //% c.shadow="string" c.defl=a
    //% d.shadow="number" d.defl=10
    //% e.shadow="number" e.defl=1
    //% wb.shadow="dropdown" wb.options="button" wb.defl=wb.text
    export function button(parameter: any, block: any) {
        let STR = parameter.STR.code;
        let a = parameter.a.code;
        let b = parameter.b.code;
        let c = parameter.c.code;
        let d = parameter.d.code;
        let e = parameter.e.code;
        let wb = parameter.wb.code;
        if (wb == "text") {
            Generator.addCode(mind(STR) + " = " + "Button(" + mind(a) + ", " + wb + "=" + b + ", command=" + mind(c) + ", width=" + d + ", height=" + e + ")");
        }
        else {
            Generator.addCode(mind(STR) + " = " + "Button(" + mind(a) + ", " + wb + "=" + mind(b) + ", command=" + mind(c) + ", width=" + d + ", height=" + e + ")");
        }
        Generator.addImport(`from tkinter import *`)
    }

    //% block="创建标签[STR]到[a][wb][b]宽[d]高[e]" blockType="command"
    //% STR.shadow="string" STR.defl=Label
    //% a.shadow="string" a.defl=root
    //% b.shadow="string" b.defl=Hello
    //% d.shadow="number" d.defl=10
    //% e.shadow="number" e.defl=1
    //% wb.shadow="dropdown" wb.options="button" wb.defl=wb.text
    export function label(parameter: any, block: any) {
        let STR = parameter.STR.code;
        let a = parameter.a.code;
        let b = parameter.b.code;
        let d = parameter.d.code;
        let e = parameter.e.code;
        let wb = parameter.wb.code;
        if (wb == "text") {
            Generator.addCode(mind(STR) + " = " + "Label(" + mind(a) + ", " + wb + "=" + b + ", width=" + d + ", height=" + e + ")");
        }
        else {
            Generator.addCode(mind(STR) + " = " + "Label(" + mind(a) + ", " + wb + "=" + mind(b) + ", width=" + d + ", height=" + e + ")");
        }
        Generator.addImport(`from tkinter import *`)
    }

    //% block="创建输入框[STR]到[a][wb]绑定变量[c]" blockType="command"
    //% STR.shadow="string" STR.defl=Entry
    //% a.shadow="string" a.defl=root
    //% c.shadow="string" c.defl=a
    //% wb.shadow="dropdown" wb.options="entry" wb.defl=entry."*"
    export function entry(parameter: any, block: any) {
        let STR = parameter.STR.code;
        let a = parameter.a.code;
        let c = parameter.c.code;
        let wb = parameter.wb.code;
        Generator.addCode(mind(STR) + " = " + "Entry(" + mind(a) + ", show=" + wb + ", textvariable=" + mind(c) + ")");
        Generator.addImport(`from tkinter import *`)
    }

    //% block="创建尺度条[STR]到[a]文本[str]长度[b]从[aa]到[bb][wb]实时函数[c]" blockType="command"
    //% STR.shadow="string" STR.defl=Scale
    //% a.shadow="string" a.defl=root
    //% b.shadow="number" b.defl=200
    //% aa.shadow="number" aa.defl=0
    //% bb.shadow="number" bb.defl=100
    //% str.shadow="string" str.defl=Scale
    //% c.shadow="string" c.defl=无
    //% wb.shadow="dropdown" wb.options="scale" wb.defl=scale.VERTICAL
    export function scale(parameter: any, block: any) {
        let STR = parameter.STR.code;
        let a = parameter.a.code;
        let b = parameter.b.code;
        let c = parameter.c.code;
        let wb = parameter.wb.code;
        let aa = parameter.aa.code;
        let bb = parameter.bb.code;
        let str = parameter.str.code;
        if (mind(c)=="无") {
            Generator.addCode(mind(STR) + " = " + "Scale(" + mind(a) + ", label=" + str + ", length=" + b + ", from_=" + aa + ", to=" + bb + ", orient=" + wb + ")");
        }
        else {
            Generator.addCode(mind(STR) + " = " + "Scale(" + mind(a) + ", label=" + str + ", length=" + b + ", from_=" + aa + ", to=" + bb + ", orient=" + wb + ", command=" + mind(c) + ")");
        }
        Generator.addImport(`from tkinter import *`)
    }
    //% block="---"
    export function ccc(parameter: any, block: any) {
    }

    //% block="关闭[STR]" blockType="command"
    //% STR.shadow="string" STR.defl=root
    export function destroy_a(parameter: any, block: any) {
        let STR = parameter.STR.code;
        Generator.addCode(mind(STR) + ".destroy()");
        Generator.addImport(`from tkinter import *`)
    }

    function mind(str: string) {
        str = str.replace(/"/g, ""); //去除所有引号
        return str
    }

}