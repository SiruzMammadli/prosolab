import {Flex} from "@/src/components";
import {Widget} from "@/app/(public)/_components/_shared";
import Image from "next/image";

export default ({item}: { item: { name: string; thumbnail: string; } }) => {
    return (
        <Flex
            as={Widget}
            direction="column"
            alignItems="center"
            justifyContent="center"
            className="gap-4"
        >
            <Image
                className="w-[50px] h-[50px] object-contain"
                src={`/images/${item.thumbnail}`}
                alt={item.name}
                width={50}
                height={50}
            />
            <p className="font-medium text-[16px]">{item.name}</p>
        </Flex>
    )
}