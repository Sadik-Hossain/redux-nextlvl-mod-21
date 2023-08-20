import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { ChangeEvent, FormEvent, useState } from 'react';

const dummyComments = [
  'Bhalo na',
  'Ki shob ghori egula??',
  'Eta kono product holo ??',
  '200 taka dibo, hobe ??',
];

interface IProps {
  id: string;
}

export default function ProductReview({ id = '1' }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');
  // const [postComment] = a();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    const options = { id, comment: inputValue };
    console.log(options);
    // await postComment(options);
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  //* mutation er khetre tuple return kore, 1st element hocche mutation function, 2nd element hocche options object

  // const { isLoading, isError, isSuccess } = options;
  return (
    <>
      <h1>asd</h1>
    </>
    // <div className="max-w-7xl mx-auto mt-5">
    //   <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
    //     <Textarea
    //       className="min-h-[30px]"
    //       onChange={handleChange}
    //       value={inputValue}
    //     />
    //     <Button
    //       type="submit"
    //       className="rounded-full h-10 w-10 p-2 text-[25px]"
    //     >
    //       <FiSend />
    //     </Button>
    //   </form>
    //   <div className="mt-10">
    //     {dummyComments.map((comment, index) => (
    //       <div key={index} className="flex gap-3 items-center mb-5">
    //         <Avatar>
    //           <AvatarImage src="https://github.com/shadcn.png" />
    //           <AvatarFallback>CN</AvatarFallback>
    //         </Avatar>
    //         <p>{comment}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
