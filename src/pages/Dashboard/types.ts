import { TableColumnsConfigProps } from "@/types";
import { Dispatch } from "redux";

// all query param that getList endpoits receive
interface DataArgs {}

export interface TableColumnTypes
  extends TableColumnsConfigProps<DataArgs> {
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  setContractId?: Dispatch<any>;
//   setAttachment: React.Dispatch<React.SetStateAction<AttachmentTypes[]>>;
  setAttachmentFormVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  setEditVisible?: React.Dispatch<React.SetStateAction<boolean>>;
//   setContractData: React.Dispatch<React.SetStateAction<Contract | undefined>>;
}