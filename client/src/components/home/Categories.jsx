import { Button, Table, TableHead, TableBody, TableRow, TableCell, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
   border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
  margin: 20px auto;
  width: 85%;
  background-color: rgb(255, 165, 0);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 30px;
  display: block;
  text-transform: none;

  &:hover {
    background-color: #FF5722;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(251, 100, 27, 0.4);
  }

  &:disabled {
    background-color: #dcdcdc;
    color: #a1a1a1;
    cursor: not-allowed;
  }

  transition: all 0.3s ease;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Fixed this line */
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
            <StyledLink to={`/create?category=${category || ''}`} >
                <StyledButton variant="contained">Share Recipe</StyledButton>
            </StyledLink>
            <StyledLink as="a" href="http://localhost:3002/">
    <StyledButton variant="contained">Generate Recipe</StyledButton>
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
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    );
}

export default Categories;
