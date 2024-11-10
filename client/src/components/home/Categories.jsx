import { Button, Table, TableHead, TableBody, TableRow, TableCell, styled } from '@mui/material';

import { Link, useSearchParams } from 'react-router-dom';

import { categories} from '../../constants/data';

const StyledTable = styled(Table)`
   border: 1px solid rgba(224, 224, 224, 1);
   `;

const StyledButton = styled(Button)`
  margin: 20px auto; /* Centers the button horizontally */
  width: 85%;
  background-color: rgb(255, 165, 0);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px; /* Adds padding for better button size */
  border-radius: 30px; /* Rounded corners */
  display: block;
  text-transform: none; /* Ensures text stays as it is (no uppercase) */

  /* Hover effect */
  &:hover {
    background-color: #FF5722; /* Slightly darker shade on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for hover */
  }

  /* Focus effect */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(251, 100, 27, 0.4); /* Glow effect on focus */
  }

  /* Disabled state */
  &:disabled {
    background-color: #dcdcdc; /* Light gray background */
    color: #a1a1a1; /* Gray text */
    cursor: not-allowed;
  }

  transition: all 0.3s ease; /* Smooth transition for hover and focus effects */
`;
const StyledLink = styled(Link)`
text-decoration: none;
color:inherit'
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <>
        <StyledLink to={`/create?category=${category || ''}`}>
        <StyledButton variant="contained">Share Recipe</StyledButton>
        </StyledLink>
        
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <StyledLink to='/'>
                        All Categories
                        </StyledLink>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category => (
                        <TableRow key={category.id}>
                            <TableCell>
                                <StyledLink to={`/?category=${category.type}`} >
                                {category.type}
                                </StyledLink>
                                </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </StyledTable>
        </>
    )
}

export default Categories;