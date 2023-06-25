import { GetStaticProps } from 'next';
import { useState } from 'react';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import LoaderIcon from "./loader.svg"

function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <>
      {!isLoading && <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}><LoaderIcon /></div>}

    </> 
  );
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {firstCategory})

  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}