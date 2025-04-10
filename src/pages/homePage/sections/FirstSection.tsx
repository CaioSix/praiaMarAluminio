import {
  ClipboardList,

} from 'lucide-react';
import Button from '../../../components/Button'

const FirstSection = () => {
  return (
    <>
      <Button kind="primary">
        ORÇAMENTO <ClipboardList className="inline ml-2 w-4 h-4" />
      </Button>
      <Button kind="primary">
        LISTAS <ClipboardList className="inline ml-2 w-4 h-4" />
      </Button>

    </>
  )
}

export default FirstSection