import NavBar from "../navbar/navbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";






const teacher = [
  {
    teacher: "John Carlo Dalaodao",
    paymentStatus: "Paid",
    role: "Faculty",
    paymentMethod: "Credit Card",
  },
  {
    teacher: "Jhon Dave Paclarin",
    paymentStatus: "Pending",
    role: "Faculty",
    paymentMethod: "PayPal",
  },
  {
    teacher: "Joel Salaria",
    paymentStatus: "Unpaid",
    role: "Faculty",
    paymentMethod: "Bank Transfer",
  },
  {
    teacher: "Jake Cortezano",
    paymentStatus: "Paid",
    role: "Faculty",
    paymentMethod: "Credit Card",
  },
  {
    teacher: "Andrei Tolentino",
    paymentStatus: "Paid",
    role: "Faculty",
    paymentMethod: "PayPal",
  },
  {
    teacher: "Adrian Paul Orendain",
    paymentStatus: "Pending",
    role: "Faculty",
    paymentMethod: "Bank Transfer",
  },
  {
    teacher: "Zyan Lio Asistio",
    paymentStatus: "Unpaid",
    role: "Admin",
    paymentMethod: "Credit Card",
  },
];

export default function Teachers() {
// const [teachers, setTeachers] = useState ([]);


// useEffect(() => {
//   const fetchTeachers = async () => {
//     const {data, error} = await supabase
//     .from("teachers")
//     .select("*")
//     if (error) {
//       console.error("Error Fetching data:", error);
//     } else {
//       setTeachers(data);
//     }
//   };
//   fetchTeachers();
// }, []); 

  return (
    <div className="w-screen h-screen">
      <NavBar />
      <div>
        <Table>
          <TableCaption>A list of your recent Teachers.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Teacher Name</TableHead>
              <TableHead className="flex justify-center mt-5">Status</TableHead>
              <TableHead className="w-[50px]">Method</TableHead>
              <TableHead className="text-right flex justify-center ">
                Role
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teacher.map((teacher) => (
              <TableRow key={teacher.teacher}>
                <TableCell className="font-medium">{teacher.teacher}</TableCell>
                <TableCell className="flex justify-center">
                  {teacher.paymentStatus}
                </TableCell>
                <TableCell>{teacher.paymentMethod}</TableCell>
                <TableCell className="text-right flex justify-center ">
                  {teacher.role}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
