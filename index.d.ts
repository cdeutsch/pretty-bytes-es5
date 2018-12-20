// Type definitions for pretty-bytes-es5 5.1
// Project: https://github.com/cdeutsch/pretty-bytes-es5
// Definitions by: York Yao <https://github.com/plantain-00>
//                 Daniela Yassuda <https://github.com/danielasy>

declare function PrettyBytes(number: number, options?: PrettyBytes.PrettyBytesOptions): string;
export = PrettyBytes;
declare namespace PrettyBytes {
    interface PrettyBytesOptions {
        signed?: boolean;
        locale?: boolean | string;
    }
}
