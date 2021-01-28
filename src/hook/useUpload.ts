import { MutationHookOptions, useMutation } from "@apollo/client";
import { FILE_UPLOAD } from "../apollo/gql/file";
import { Ffile, FileInput, fileUploads, fileUploadsVariables } from "../type/api";

export const useUpload = (options?: MutationHookOptions<fileUploads, fileUploadsVariables>) => {
    const [multMu, { loading: uploadLoading }] = useMutation<fileUploads, fileUploadsVariables>(FILE_UPLOAD, {
        ...options
    });

    const signleUpload = (file: FileInput, onSucess?: (url:string,data: Ffile) => void) => {
        if(!file) return;
        
        multMu({
            variables: {
                files: [file]
            }
        }).then(({data})=> {
            const file = data?.FileUploads.data[0];
            const url = file?.uri;
            if(url && file) {
                onSucess?.(url,file)
            }
        })
    }

    return {signleUpload, uploadLoading}
}

