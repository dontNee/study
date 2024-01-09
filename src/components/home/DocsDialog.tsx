import { Alert, Dialog, DialogContent } from "@mui/material";


export default function DocsDialog({open, handleClose, docsUrl}:any) {

    return (
        <Dialog fullScreen={true} open={open} onClose={handleClose}>
            <DialogContent>
                
            </DialogContent>
        </Dialog>
    )
}