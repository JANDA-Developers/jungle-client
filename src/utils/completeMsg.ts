import { isEmpty, toast } from "@janda-com/front";

type TError = {
    [key:string]:any;
    code?: string | null;
    message: string;
    details?: string[] | null;
}

type TResult = {
    [key:string]:any;
    ok: boolean;
    errors?: TError[] | null;
}

const ErrorMsg = "이런 문제가 발생 했습니다."
  
export const completeMsg = (
    result: TResult | undefined | null,
    resultOK?: string,
    resultFale?: string | undefined,
    queryName?: string,
  ):boolean => {
    if (!result) return false;
    
    if (result.ok && resultOK) {
      toast.success(resultOK, {
        className: `${queryName}-ok`
      });
    } else {
        toast.warn(resultFale || ErrorMsg, {
          toastId: `${queryName}-error`
      });
    }
    
    if (!isEmpty(result.errors)) {
        result.errors!.forEach((err) => { 
        const {code, details, message} = err
        console.error("On Completed Error Msg From BackEnd");
        console.error(message);
        console.error(code);
        console.error(details);
        })

    }
    
    return result.ok
  };
  