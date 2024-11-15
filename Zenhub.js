import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Home, Store, Map, Film, Heart, GamepadIcon, Share2, User } from 'lucide-react';

const ZenHubApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [currentTab, setCurrentTab] = useState('home');
  const [score, setScore] = useState(0);

  const posts = [
    { id: 1, user: 'John', content: 'Found this amazing peaceful spot!', likes: 45 },
    { id: 2, user: 'Sarah', content: 'Morning meditation session 🧘‍♀️', likes: 32 },
  ];

  const marketplaceItems = [
    { id: 1, name: 'Meditation Cushion', price: 29.99 },
    { id: 2, name: 'Aromatherapy Set', price: 49.99 },
  ];

  const touristSpots = [
    { id: 1, name: 'Peaceful Valley Resort', type: 'Resort', rating: 4.5 },
    { id: 2, name: 'Mountain View Lodge', type: 'Lodge', rating: 4.8 },
  ];

  const movies = [
    { id: 1, title: 'Peaceful Warriors', rating: '4.5⭐', showtime: '7:00 PM' },
    { id: 2, title: 'Nature\'s Call', rating: '4.3⭐', showtime: '8:30 PM' },
  ];

  const healthTips = [
    { id: 1, category: 'Food', tip: 'Try these stress-relieving foods', details: 'Dark chocolate, nuts...' },
    { id: 2, category: 'Exercise', tip: 'Quick 10-min yoga routine', details: 'Simple stretches...' },
  ];

  const initializeGrid = () => {
    const grid = Array(4).fill(null).map(() => Array(4).fill(0));
    addRandomTile(grid);
    addRandomTile(grid);
    return grid;
  };

  const addRandomTile = (grid) => {
    const emptyCells = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] === 0) emptyCells.push([i, j]);
      }
    }
    if (emptyCells.length > 0) {
      const [x, y] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      grid[x][y] = Math.random() < 0.9 ? 2 : 4;
    }
  };

  const slideRow = (row) => {
    const nonZeroTiles = row.filter((tile) => tile !== 0);
    const newRow = [];
    for (let i = 0; i < nonZeroTiles.length; i++) {
      if (nonZeroTiles[i] === nonZeroTiles[i + 1]) {
        newRow.push(nonZeroTiles[i] * 2);
        i++;
      } else {
        newRow.push(nonZeroTiles[i]);
      }
    }
    while (newRow.length < 4) newRow.push(0);
    return newRow;
  };

  const slideGrid = (grid, direction) => {
    const newGrid = Array(4).fill(null).map(() => Array(4).fill(0));
    let moved = false;

    if (['left', 'right'].includes(direction)) {
      for (let i = 0; i < 4; i++) {
        const row = grid[i];
        const newRow = direction === 'left' ? slideRow(row) : slideRow(row.reverse()).reverse();
        if (newRow.join('') !== row.join('')) moved = true;
        newGrid[i] = newRow;
      }
    } else {
      for (let j = 0; j < 4; j++) {
        const column = grid.map((row) => row[j]);
        const newColumn = direction === 'up' ? slideRow(column) : slideRow(column.reverse()).reverse();
        if (newColumn.join('') !== column.join('')) moved = true;
        for (let i = 0; i < 4; i++) {
          newGrid[i][j] = newColumn[i];
        }
      }
    }

    return { newGrid, moved };
  };

  const [grid, setGrid] = useState(initializeGrid());
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });

  const handleSwipe = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStart.x;
    const deltaY = e.changedTouches[0].clientY - touchStart.y;

    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (absX > absY) {
      processMove(deltaX > 0 ? 'right' : 'left');
    } else {
      processMove(deltaY > 0 ? 'down' : 'up');
    }
  };

  const processMove = (direction) => {
    const { newGrid, moved } = slideGrid(grid, direction);
    if (moved) {
      addRandomTile(newGrid);
      setGrid(newGrid);
      setScore((prev) => prev + calculateScore(newGrid));
    }
  };

  const calculateScore = (newGrid) => newGrid.flat().reduce((sum, tile) => sum + tile, 0);

  const LoginSection = () => (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Welcome to ZenHub</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={() => setIsLoggedIn(true)}>Login</Button>
      </CardContent>
    </Card>
  );

  if (!isLoggedIn) return <LoginSection />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="games">Games</TabsTrigger>
          {/* Add triggers for all other tabs */}
        </TabsList>
        <TabsContent value="games">
          <Card
            onTouchStart={(e) =>
              setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })
            }
            onTouchEnd={handleSwipe}
          >
            <CardHeader>
              <CardTitle>2048 Game</CardTitle>
              <p>Score: {score}</p>
            </CardHeader>
            <CardContent>
              <div>
                {grid.map((row, rowIndex) => (
                  <div key={rowIndex}>{row.map((cell) => cell || '')}</div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add other tab contents */}
      </Tabs>
    </div>
  );
};

export default ZenHubApp;
